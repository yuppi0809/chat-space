  validates :content, presence: true, unless: :image?
end
