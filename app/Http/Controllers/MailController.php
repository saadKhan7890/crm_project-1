<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Webklex\IMAP\Facades\Client;
class MailController extends Controller
{
    public function index(){
        // $client = Client::account('gmail');
        // $client->connect();
        // $folders = $client->getFolders();
        echo '<div id="listData" class="list-form-container">';
        /* Connecting Gmail server with IMAP */
        $connection = imap_open('{imap.gmail.com:993/imap/ssl}INBOX', 'noreply@curtiscs.com', 'CBusiness2022') or die('Cannot connect to Gmail: ' . imap_last_error());
        /* Search Emails having the specified keyword in the email subject */
        $emailData = imap_search($connection, 'UNSEEN');
        
        if (! empty($emailData)) {
            echo '<table>';
            foreach ($emailData as $emailIdent) {
                $overview = imap_fetch_overview($connection, $emailIdent, 0);
                $message = imap_fetchbody($connection, $emailIdent, '1.1');
                $messageExcerpt = substr($message, 0, 150);
                $partialMessage = trim(quoted_printable_decode($messageExcerpt)); 
                $date = date("d F, Y", strtotime($overview[0]->date));
                echo '<tr>
                    <td><span class="column">
                            '.$overview[0]->from.'
                    </span></td>
                    <td class="content-div"><span class="column">
                            '.$overview[0]->subject.' - '.$partialMessage.'
                    </span><span class="date">
                            '.$date.'
                    </span></td>
                </tr>';
            } // End foreach
            echo '</table>';
            } // end if
        imap_close($connection);
        echo '</div>';
    }
}
