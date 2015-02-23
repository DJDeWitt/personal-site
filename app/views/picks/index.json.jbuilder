json.array!(@picks) do |pick|
  json.extract! pick, :id, :name, :description, :url
  json.url pick_url(pick, format: :json)
end
