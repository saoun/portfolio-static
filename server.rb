require 'sinatra'
require 'rubygems'

  # class Server < Sinatra::Base
    get '/' do
      erb :index
    end

    get '/about' do
      erb :about
    end

    get '/workshops' do
      erb :workshops
    end

    get '/cv' do
      erb :cv
    end

    get '/projects' do
      erb :projects
    end

    get '/photo' do
      erb :photo
    end

    get '/contact' do
      erb :contact
    end

    get '/projects/rightsforward' do
      erb :rightsforward
    end

    get '/projects/backenddev' do
      erb :backenddev
    end

    get '/projects/halfways' do
      erb :halfways
    end

    get '/projects/gamedev' do
      erb :gamedev
    end

    get '/projects/rightsfwd' do
      erb :rightsfwd
    end

    get '/projects/raddotcat' do
      erb :raddotcat
    end

    get '/projects/trumptwittering' do
      erb :trumptwittering
    end

    # get '/chamoun' do
    #   erb :chamoun
    # end

 


# end
