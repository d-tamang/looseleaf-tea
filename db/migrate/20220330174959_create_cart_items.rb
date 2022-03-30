class CreateCartItems < ActiveRecord::Migration[5.2]
  def change
    create_table :cart_items do |t|
      t.integer :user_id, null: false
      t.integer :tea_id, null: false
      t.integer :quantity
      t.integer :price, null: false
      t.string :size, null: false

      t.timestamps
    end
    add_index :cart_items, :user_id
    add_index :cart_items, :tea_id
  end
end
