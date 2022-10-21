<?php

namespace App\Policies;

use Illuminate\Auth\Access\HandlesAuthorization;
use App\Models\ItemType;
use App\Models\User;

class ItemTypePolicy
{
	use HandlesAuthorization;

	/**
	 * Determine whether the user can view any models.
	 *
	 * @param  \App\Models\User  $user
	 * @return \Illuminate\Auth\Access\Response|bool
	 */
	public function viewAny(User $user)
	{
		return optional($user->permissions()->where('permission_id', 123)->first())->id > 0;
	}

	/**
	 * Determine whether the user can view the model.
	 *
	 * @param  \App\Models\User  $user
	 * @param  \App\Models\ItemType  $itemType
	 * @return \Illuminate\Auth\Access\Response|bool
	 */
	public function view(User $user, ItemType $itemType)
	{
		return optional($user->permissions()->where('permission_id', 124)->first())->id > 0;
	}

	/**
	 * Determine whether the user can create models.
	 *
	 * @param  \App\Models\User  $user
	 * @return \Illuminate\Auth\Access\Response|bool
	 */
	public function create(User $user)
	{
		return optional($user->permissions()->where('permission_id', 125)->first())->id > 0;
	}

	/**
	 * Determine whether the user can update the model.
	 *
	 * @param  \App\Models\User  $user
	 * @param  \App\Models\ItemType  $itemType
	 * @return \Illuminate\Auth\Access\Response|bool
	 */
	public function update(User $user, ItemType $itemType)
	{
		return optional($user->permissions()->where('permission_id', 126)->first())->id > 0;
	}

	/**
	 * Determine whether the user can delete the model.
	 *
	 * @param  \App\Models\User  $user
	 * @param  \App\Models\ItemType  $itemType
	 * @return \Illuminate\Auth\Access\Response|bool
	 */
	public function delete(User $user, ItemType $itemType)
	{
		return optional($user->permissions()->where('permission_id', 127)->first())->id > 0;
	}

	/**
	 * Determine whether the user can restore the model.
	 *
	 * @param  \App\Models\User  $user
	 * @param  \App\Models\ItemType  $itemType
	 * @return \Illuminate\Auth\Access\Response|bool
	 */
	public function restore(User $user, ItemType $itemType)
	{
		return optional($user->permissions()->where('permission_id', 127)->first())->id > 0;
	}

	/**
	 * Determine whether the user can permanently delete the model.
	 *
	 * @param  \App\Models\User  $user
	 * @param  \App\Models\ItemType  $itemType
	 * @return \Illuminate\Auth\Access\Response|bool
	 */
	public function forceDelete(User $user, ItemType $itemType)
	{
		return optional($user->permissions()->where('permission_id', 127)->first())->id > 0;
	}

	public function canDownload(User $user)
	{
		return optional($user->permissions()->where('permission_id', 141)->first())->id > 0;
	}
}
