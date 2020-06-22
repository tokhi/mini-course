class AddPremiumToEpisode < ActiveRecord::Migration[6.0]
  def change
    add_column :episodes, :premium, :boolean
    add_column :episodes, :author, :string
    add_column :episodes, :thumbnail, :string
  end
end
