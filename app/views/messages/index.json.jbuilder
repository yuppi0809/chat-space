json.array! @new_messages do |message|
  json.user_name message.user.name
  json.content message.content
  json.time message.created_at
  json.image message.image
end

