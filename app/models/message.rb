class Message < ActiveRecord::Base
  belongs_to :user
  belongs_to :group
  validates :message, presence: true, unless: :image?

  mount_uploader :image, ImageUploader
end
