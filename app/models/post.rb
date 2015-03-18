class Post < ActiveRecord::Base

  # Slug Functionality
  extend FriendlyId
  friendly_id :title, use: [:slugged, :history]

  # Associations
  belongs_to :user



  # Pagination Search
  def self.search(search, page)
    # paginate :per_page => 5, :page => page,
    #          :conditions => ['title like ?', "%#{search}%"],
    #          :order => 'title'
    order('created_at DESC').where('title LIKE ?', "%#{search}%").paginate(page: page, per_page: 8)
  end




end
