@teas.each do |tea|
  json.set! tea.id do
    json.id tea.id
    json.name tea.name
    json.category tea.category
    json.description tea.description
    json.price tea.price
    json.size tea.size
    json.photoUrl url_for(tea.photo)
  end
end