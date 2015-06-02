class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :name
      t.string :description
      t.text :body
      t.string :image
      t.boolean :published

      t.timestamps null: false
    end
  end
end
