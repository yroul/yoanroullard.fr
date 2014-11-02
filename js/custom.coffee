#allowed hashes === available partial to display
allowedHash = ["contact","programming","music"]
#extract partial name from location
getPartialName = (location) ->
  partialName = location.hash.replace("#!/","")

#replace current content by selected partial
replaceWithPartial = (partialName) ->
  if partialName in allowedHash
    $.ajax
      url : "partials/"+partialName+".html"
      dataType : 'html'
      success: (data)->
        $("#content").html(data)
      error : (err) ->
        console.log err




#display partial when hash change
$(window).on "hashchange", =>
  partialName = getPartialName window.location
  console.log "requested partial : "+partialName
  replaceWithPartial(partialName)

#manage to display the right partial after the user hit refresh
$(document).ready ->
  partialName = getPartialName window.location
  if partialName != ''
    replaceWithPartial partialName
