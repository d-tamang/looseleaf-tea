@reviews.each do |review|
  json.set! review.id do
    json.id review.id
    json.title review.title
    json.body review.body
    json.rating review.rating
    json.teaId review.tea_id
    json.userId review.user_id
    json.created_at review.created_at
    json.updated_at review.updated_at
    json.name review.user.first_name
  end
end