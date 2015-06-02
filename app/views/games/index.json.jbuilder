json.array!(@games) do |game|
  json.extract! game, :id, :name, :description, :body, :image, :published
  json.url game_url(game, format: :json)
end
