Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post "/token" => "tokens#create"
    end
  end
end
