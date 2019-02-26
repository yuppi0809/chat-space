json.array! @new_messages do |message|
  json.id message.id
  json.user_name message.user.name
  json.content message.content
  json.time message.created_at.strftime("%Y/%m/%d %H:%M")
  json.image message.image
end

