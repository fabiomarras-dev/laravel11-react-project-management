<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TaskResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'created_at' => (new Carbon($this->created_at))->format('Y-m-d'),
            'due_date' => (new Carbon($this->created_at))->format('Y-m-d'),
            'status' => $this->status,
            'priority' => $this->priority,
            'image_path' => $this->image_path,
            'project' => $this->assignedUser ? new ProjectResource($this->project) : null,
            'assignedUser' => new UserResource($this->assignedUser),
            'createdBy' => new UserResource($this->createdBy),
            'updatedBy' => new UserResource($this->updatedBy),
        ];
    }
}
