# About Unfinished Visit Tracking
Unfinished visit tracking is an automated system that keeps track of appointments and 
classes that do not have a completed note. Each user that logs in will
have their appointment and class unfinished visits tracked for them. 

This system is designed to make it easy to complete all necessary notes. In addition to the benefits 
that the system offers each provider, it also enables administrators the ability to see unfinished 
visits across all providers.

## Using unfinished visit tracking as a provider
When you are logged into the system, if you have any unfinished visits, you will see an icon with a badge indicating
the number of unfinished visits you have to complete. Clicking this icon will take you to a page where
you will be able to view all appointments or classes that require a SOAP note to be completed before it can be
removed from the unfinished visit list. Once you complete a note for each item, it will automatically be removed from
the list. In the image below you can see the bell icon with a red badge containing the number 2. This indicates
that the logged in user has 2 unfinished SOAP notes. Clicking on this icon will take the user to a page that displays
each visit that requires a note to be completed.

![unfinished visit tracking provider](/images/unfinished-visits/provider-indicator-icon.png "Unfinished visits indicator")

## Using unfinished visit tracking as an admin/owner.
On the owner dashboard you will see a tab for unfinished visit tracking. From here you can press the "Check Now" button
and we will return a list of each provider in your office and the number of unfinished visits they currently have.
Each provider will be presented with a link to view their unfinished visits in more detail. You must have "owner"
privileges in order to see this section of the application.
![unfinished visit tracking admin](/images/unfinished-visits/admin-check-now.png "Check Now Button")
![unfinished visit tracking admin](/images/unfinished-visits/admin-provider-list.png "List of providers with unfinished visits")

## Unfinished Visit Tracking Settings
There are a few settings that each provider can set to change the way QuickerNotes tracks unfinished visits.
You can find the following settings by going to your account menu at the top right of the screen -> select "Settings".
Once on the settings page select "Unfinished Visit Tracking". You can also get there by clicking this link: 
[Unfinished Visits Settings][unfinished-visits-settings]

#### Unfinished visit tracking start date
- This is the date at which we start tracking unfinished visits. Any visits that are scheduled
before the date selected here will not be counted as unfinished. See the image below as a reference.

#### Ignored Appointments/Classes
- This setting tells QuickerNotes which appointment or class types you don't want to keep track of. As an example of
when to use this setting consider the following scenario.
- You teach a yoga class each day, but you are not required to complete SOAP notes for each of the attendees of the 
yoga class. In this case you would go to your settings and select the yoga class in the list of appointment/class types
that you would like QuickerNotes to ignore. See the image below as a reference.

![unfinished visit settings](/images/unfinished-visits/settings.png "Unfinished Visits Settings")

[unfinished-visits-settings]: https://quickernotes.com/settings/unfinished-visits