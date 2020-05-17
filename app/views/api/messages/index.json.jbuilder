json.arry! @messages do |message|
  #@messagesをmessageに入れて要素の分だけ繰り返し
  json.message message.message
  json.image_url message.image.url
  json.create_at message.created_at.strftime("%Y年%m月%d日 %H時%M分")
  json.user_name message.user.name
  json.id message.id
end