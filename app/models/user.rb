class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :name, presence: true, uniqueness: true
  #nameカラムが、空の場合はfalse、uniqueで、同じ値が保存できないようにする
  #Railsチームはモデルレベルでのバリデーションが最も適切であると考えている。
  #他にも、クライアント側でのバリデーション、データベース制約（データベース側でのバリデーション）、コントローラーでのバリデーションなどもある
end
