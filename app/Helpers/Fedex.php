<?php

namespace App\Helpers;
use Illuminate\Support\Facades\App;

class Fedex
{
    protected $apiUrl = '';
    protected $client_id = '';
    protected $client_secret = '';
    protected $token = '';
    protected $accountNo = '';
    function __construct()
    {
        if (App::environment('local')){
            $this->apiUrl = 'https://apis-sandbox.fedex.com/';
            $this->client_id = env('FEDEX_API_KEY');
            $this->client_secret = env('FEDEX_SECRET_KEY');
            $this->accountNo = env('FEDEX_SHIPPING_ACCOUNT');
        }else if(App::environment('production')){
            $this->apiUrl = 'https://apis-sandbox.fedex.com/';
            $this->client_id = env('FEDEX_API_KEY');
            $this->client_secret =  env('FEDEX_SECRET_KEY');
            $this->accountNo = env('FEDEX_SHIPPING_ACCOUNT');
        }
    }
    public function getUrl($uri){
        return $this->apiUrl.$uri;
    }
    public function authorize()
    {
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => self::getUrl('oauth/token'),
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS => 'grant_type=client_credentials&client_id='.$this->client_id.'&client_secret='.$this->client_secret,
            CURLOPT_HTTPHEADER => array(
                'content-type: application/x-www-form-urlencoded'
            ),
        ));
        $response = curl_exec($curl);
        curl_close($curl);
        $this->token = json_decode($response)->access_token;
    }
    public function getRates($postalCode, $weight=0, $type='ustous'){
        $country='US';
        $addresses = [
            'US' => [
                "stateOrProvinceCode"=> "CA",
                "postalCode"=> "90745",
                "countryCode"=> "US",
            ],
            'CAW' => [
                "stateOrProvinceCode"=> "BC",
                "postalCode"=> "V3Z 1A7",
                "countryCode"=> "CA",
            ],
            'CAE' => [
                "stateOrProvinceCode"=> "ON",
                "postalCode"=> "L5S 2A3",
                "countryCode"=> "CA",
            ],
        ];
        $recipientAddress = [];
        if($type=='ustous'){
            $country = 'US';
            $recipientAddress = $addresses['US'];
        }else if ($type=='catoca'){
            $country = 'CA';
            $recipientAddress = $addresses['CAE'];
        }else if ($type=='catous'){
            $country = 'CA';
            $recipientAddress = $addresses['US'];
        }
        $this->authorize();
        $curl = curl_init();
        $arr = [
            "accountNumber"=>[
                "value"=>$this->accountNo,
            ],
            "requestedShipment"=>[
                "shipper"=>[
                    "address"=>[
                        // "stateOrProvinceCode"=> "BC",
                        "postalCode"=> $postalCode,//"90220",
                        "countryCode"=> $country,//"US"
                    ]
                ],
                "recipient"=>[
                    "address"=>$recipientAddress
                ],
                "serviceType"=> "FEDEX_GROUND",
                "rateRequestType"=>["ACCOUNT"],
                "pickupType"=> "DROPOFF_AT_FEDEX_LOCATION",
                "requestedPackageLineItems"=>[
                    [
                        "weight"=>[
                            "units"=> "LB",
                            "value"=> $weight
                        ]
                    ]
                ],
                "groundShipment"=> true
            ],
            "carrierCodes"=>["FDXG"]
        ];
        curl_setopt_array($curl, array(
        CURLOPT_URL => self::getUrl('rate/v1/rates/quotes'),
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'POST',
        CURLOPT_POSTFIELDS =>json_encode($arr),
        CURLOPT_HTTPHEADER => array(
            'Authorization: Bearer '.$this->token,
            'Content-Type: application/json'
        ),
        ));
        $response = curl_exec($curl);
        curl_close($curl);
        return json_decode($response);
    }
}