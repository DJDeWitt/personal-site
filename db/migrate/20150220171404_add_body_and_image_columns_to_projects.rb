class AddBodyAndImageColumnsToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :body, :text
    add_column :projects, :image, :string
  end
end
