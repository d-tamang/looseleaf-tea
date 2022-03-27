class Review < ApplicationRecord
  validates :title, :body, :rating, :user_id, :tea_id, presence: true

  belongs_to :user,
    class_name: :User,
    foreign_key: :user_id

  belongs_to :tea,
    class_name: :Tea,
    foreign_key: :tea_id
end
