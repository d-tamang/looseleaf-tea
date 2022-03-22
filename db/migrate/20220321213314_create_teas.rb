class CreateTeas < ActiveRecord::Migration[5.2]
  def change
    create_table :teas do |t|
      t.string :name, null: false
      t.string :category, null: false
      t.text :description, null: false
      t.integer :price, null: false
      t.string :size

      t.timestamps
    end
    add_index :teas, :name, unique: true
  end
end
