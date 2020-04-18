class Group < ActiveRecord::Base
  has_many :group_users
  has_many :users, through: :group_users
  has_many :messages
  validates :group_name, presence: true, uniqueness: true

  def show_last_message
    if(last_message= self.messages.last).present?
      if last_message.message?
        last_message.message
      else
        '画像が投稿されています'
      end
    else
      'まだメッセージはありません'
    end
  end
end
