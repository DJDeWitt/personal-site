json.array!(@images) do |image|
  json.extract! image, :id, :name, :description, :url
  json.url image_url(image, format: :json)
end
