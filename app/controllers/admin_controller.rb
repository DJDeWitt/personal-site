class AdminController < ApplicationController

  def index
    @user = User.new
    @posts = Post.all
    @projects = Project.all
  end

end