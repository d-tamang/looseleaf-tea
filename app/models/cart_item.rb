class CartItem < ApplicationRecord
  validates :user_id, :tea_id, :size, :price, presence: true

  belongs_to :user,
    class_name: :User,
    foreign_key: :user_id

  belongs_to :tea,
    class_name: :Tea,
    foreign_key: :tea_id
end
