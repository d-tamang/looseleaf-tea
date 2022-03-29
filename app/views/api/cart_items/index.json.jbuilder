json.cartItems do
  @cart_items.each do |cart_item|
    json.set! cart_item.id do
      json.id cart_item.id
      json.userId cart_item.user_id
      json.teaId cart_item.tea_id
      json.price cart_item.price
      json.size cart_item.size
    end
  end
end

json.teas do
  cart_items = @cart_items.includes(:tea)
  cart_items.each do |cart_item|
    json.set! cart_item.tea.id do
      json.id cart_item.tea.id
      json.name cart_item.tea.name
      json.price cart_item.tea.price
      json.size cart_item.tea.size
      json.image cart_item.tea.image
    end
  end
end