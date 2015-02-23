class User < ActiveRecord::Base

  validates :password,
            confirmation: true,
            presence: true

  validates :username,
            uniqueness: true,
            presence: true


  has_secure_password

end
