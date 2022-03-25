@cart_items.each do |cart_item|
  json.set! cart_item.id do
    json.id cart_item.id
    json.userId = cart_item.user_id
    json.teaId cart_item.tea_id
  end
end