json.tea do
  json.extract! @tea, :id, :name, :category, :description, :price, :size, :image
end
json.photoUrl url_for(@tea.photo)

json.reviews do
  @tea.reviews.each do |review|
    json.set! review.id do
      json.id review.id
      json.title review.title
      json.body review.body
      json.rating review.rating
      json.teaId review.tea_id
      json.userId review.user_id
      json.createdAt review.created_at
      json.name review.user.first_name
    end
  end
end