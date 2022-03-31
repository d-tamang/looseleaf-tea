class Tea < ApplicationRecord
  validates :name, :category, :description, :price, presence: true
  validates :name, uniqueness: true
  
  has_one_attached :photo

  has_many :cart_items,
    class_name: :CartItem,
    foreign_key: :tea_id

  has_many :reviews,
    class_name: :Review,
    foreign_key: :tea_id
end
