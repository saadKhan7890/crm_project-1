<?php

namespace App\Repositories;

use App\Repositories\BaseRepository;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use App\Models\{User, TicketActivity};
use App\Notifications\TicketAssigned;
class TicketRepository implements BaseRepository
{
    protected $model;
    public function bindModel($model)
    {
        $this->model = new $model;
    }
    public function find($id): Model
    {
        return $this->model->find($id);
    }
    public function delete($id)
    {
        $this->model->delete($id);
    }
    public function assignTicket($id, $role=14){
        $ticket = $this->find($id);
        if(intval($ticket->user_id) == 0){
            if($ticket->resolution==1||$ticket->resolution==2||$ticket->resolution==3){
                //assigning it to warranty claim role
                $users = User::where('role_id',$role)->withCount(['tickets'])
                ->orderBy('tickets_count','asc')->get();
                if($users){
                    $ticket->activities()->create([
                        'activity'=>'Ticket Assigned to '.$users[0]->name.', Resolution: '.$ticket->resolution_name,
                        'activity_type'=>1,
                    ]);
                    $this->setTicketUser($id, $users[0]);
                    $users[0]->notify(new TicketAssigned($ticket));
                    return true;
                }
            }
        }
        return false;
    }
    public function setTicketUserToNull($id){
        $ticket = $this->find($id);
        $ticket->user_id = NULL;
        $ticket->save();
    }
    public function setTicketUser($id, User $user){
        $ticket = $this->find($id);
        $ticket->user_id = $user->id;
        $ticket->save();
    }
}
