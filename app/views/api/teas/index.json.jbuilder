@teas.each do |tea|
  json.set! tea.id do
    json.extract! tea, :id, :name, :category, :description, :price, :size
    json.photoUrl url_for(tea.photo)
  end
end