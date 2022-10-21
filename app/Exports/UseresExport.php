<?php

namespace App\Exports;

use App\Models\User;
use Maatwebsite\Excel\Concerns\{FromCollection, WithHeadings, WithMapping};

class UseresExport implements FromCollection, WithHeadings, WithMapping
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return User::with('role')->select(['id', 'name', 'email', 'role_id'])->get();
    }

	public function headings(): array
	{
		return [
			'ID',
			'Name',
			'Email',
			'Role'
		];
	}

	public function map($user): array
	{
		return [
			$user->id,
			$user->name,
			$user->email,
			$user->role->name,
		];
	}
}
