json.extract! @tea, :id, :name, :category, :description, :price, :size
json.photoUrl url_for(@tea.photo)