class WelcomeController < ApplicationController

  def index
    @user = User.new
    @posts = Post.search(params[:search], params[:page]).take(3)
    @projects = Project.search(params[:search], params[:page]).take(3)
  end

  def search

    search_query = params["q"] # User entered search string
    p "search array:"
    p search_array = search_query.split(" ") # Array containing individual terms of the user entered search string

    @searched_posts = []
    @searched_projects = []
    @searched_games = []

    search_array.each do |sa_item|
      Post.all.each do |post|
        if ( post.title.downcase.include? sa_item.downcase and post.published == true)
          @searched_posts << post
        end
      end
      Project.all.each do |project|
        if project.name.downcase.include? sa_item.downcase
          @searched_projects << project
        end
      end
      Game.all.each do |game|
        if game.name.downcase.include? sa_item.downcase
          @searched_games << game
        end
      end
    end
    @searched_posts
    @searched_projects
    @searched_games
  end

  def jellyvision
    @user = User.new
    @posts = Post.search(params[:search], params[:page]).take(3)
    @projects = Project.search(params[:search], params[:page]).take(3)
  end

end