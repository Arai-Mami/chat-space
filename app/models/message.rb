class Message < ActiveRecord::Base
  belongs_to :user
  belongs_to :group
  validates :message, presence: true, unless: :image?
end
