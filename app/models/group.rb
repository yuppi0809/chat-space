class Group < ApplicationRecord
  has_many :messages
  has_many :group_users
  has_many :users, through: :group_users
  validates :name, presence: true

  def show_messages
    if (last_message = self.messages.last).present?
      last_message.content? ? last_message.content : "画像が送信されました"
    else
      "まだメッセージはありません"
    end
  end

  def show_username
    array = []
    self.users.each do |user|
      array << user.name
    end
    array.join(", ")
  end
end
