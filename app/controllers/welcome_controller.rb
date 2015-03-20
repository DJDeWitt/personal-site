class WelcomeController < ApplicationController

  def index
    @user = User.new
    @posts = Post.search(params[:search], params[:page]).take(8)
    @projects = Project.search(params[:search], params[:page]).take(8)
  end

end