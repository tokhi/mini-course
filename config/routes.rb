Rails.application.routes.draw do
  root 'pages#index'
  devise_for :users
  # get 'episodes', to: 'pages#episodes'
  get "api/:course_id/episodes",  to: 'pages#episodes'
  get 'api/courses', to: 'pages#courses'
  post 'subscribe', to: 'pages#subscribe'
  resources :courses
  resources :episodes
end
