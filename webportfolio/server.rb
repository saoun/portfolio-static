module Sinatra
  class Server < Sinatra::Base
    get "/" do
      erb :index
    end

    get '/about' do
      erb :index
    end

    get '/workshops' do
      erb :index
    end

    get '/cv' do
      erb :index
    end

    get '/projects' do
      erb :index
    end

    get '/contact' do
      erb :index
    end


  end
end
