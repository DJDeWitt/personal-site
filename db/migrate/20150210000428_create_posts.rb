class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.string :dek
      t.text :body
      t.string :image

      t.timestamps null: false
    end
  end
end
