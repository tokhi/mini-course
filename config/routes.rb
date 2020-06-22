Rails.application.routes.draw do
  devise_for :users
  root 'pages#index'
  # get 'episodes', to: 'pages#episodes'
  get "api/:course_id/episodes",  to: 'pages#episodes'
  get 'api/courses', to: 'pages#courses'
  post 'subscribe', to: 'pages#subscribe'
  resources :courses
  resources :episodes
end
