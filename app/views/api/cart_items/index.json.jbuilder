@cart_items.each do |cart_item|
  json.set! cart_item.id do
    json.id cart_item.id
    json.userId = cart_item.user_id
    json.teaId cart_item.tea_id
    json.price cart_item.price
    json.size cart_item.size
  end
end

cart_items = @cart_items.includes(:tea)
cart_items.each do |cart_item|
  json.set! cart_item.tea.id do
    json.name cart_item.tea.name
    json.price cart_item.tea.price
    json.size cart_item.tea.size
    json.photoUrl cart_item.tea.photoUrl
  end
end