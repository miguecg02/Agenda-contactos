import { Group, GroupGetDto, GroupPostDto, NewGroup } from "../../interfaces/group";
import { contactGetDtoToContact } from "./contactMap";

export function groupToGroupPostDto(group:Group|NewGroup):GroupPostDto{
  const newGroup : GroupPostDto = {
    Name: group.name
  }
  if(group.description) newGroup.Description = group.description;
  return newGroup;
}

export function groupGetDtoToGroup(groupDto:GroupGetDto):Group{
  const group : Group = {
    id: groupDto.id,
    name: groupDto.name,
    contacts: groupDto.contacts?.map(contactDTO => contactGetDtoToContact(contactDTO)) || []
  }
  if(groupDto.description) group.description = groupDto.description;
  return group;
}