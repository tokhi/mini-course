json.extract! episode, :id, :title, :description, :url, :premium, :thumbnail, :author, :section_id, :created_at, :updated_at
json.url episode_url(episode, format: :json)
