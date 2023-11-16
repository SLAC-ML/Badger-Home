---
sidebar_position: 3
---

# GUI Usage

Once you launch Badger in GUI mode, you'll have various Badger features to explore. You can search through this page to get to the guide on any specify GUI feature, or if you believe a guide is missing for the topic you are interested in, please consider [raising an issue here](https://github.com/slaclab/Badger/issues/new) or [shooting us an email](mailto:zhezhang@slac.stanford.edu), many thanks :)

## Home page

### Create a new routine

On Badger home page, click the *Plus* button (highlighted in the screenshot below):

![Create new routine](/img/guides/create_new_routine.png)

You'll land on the routine editor page:

![Routine editor](/img/guides/routine_editor.png)

where you can select the generator to use, the environment to optimize on, and configure the VOCS.

### Select/deselect a routine

Hover one item in the routine list (highlighted below) and click it will select the specific routine:

![Hover on routine](/img/guides/hover_on_routine.png)

Once selected, the content in the [history browser](#browse-the-historical-runs) (on top of the run monitor) will change to show the runs corresponding to the selected routine only.

Click the selected routine again to deselect it. If no routine is selected, the history browser will show all the runs for all the routines.

### Delete a routine

Hover the *Delete* button (the one with the trash can icon) on the routine you'd like to delete will highlight it in red, click the button and confirm on the confirmation dialog will delete the routine.

![Delete a routine](/img/guides/delete_routine.png)

Note that deleting a routine will **NOT** automatically delete all the runs associate with it. This behavior is intended to give users a chance to recover it if regretted later. Of course, if all the associated runs have already been deleted, then it will not be possible to recover the routine -- nevertheless you can [recreate it](#create-a-new-routine), creating a routine is not that hard after all.

### Filter routines

You can use the search bar to filter the routines. Badger will try to match the routine names with the text you put in the search bar. Currently we don't support RegEx, but we plan to add the support in the future releases, along with the ability to search other metadata, such as descriptions.

![Filter routines](/img/guides/filter_routines.png)

### Browse the historical runs

You can browse the historical runs in Badger by clicking the *Next*/*Previous* buttons in the history browser:

![History browser](/img/guides/history_browser.png)

or simply click on the combobox that shows the current run name, to trigger a dropdown menu that lists all the matched runs (categorized and sorted by run date and time). Clicking on a run in the menu will show the run data in the run monitor below.

![History dropdown](/img/guides/history_dropdown.png)

Note that the routine editor content will also be refreshed according to routine of the selected run.

### Configure Badger settings

Click the *Settings* button (with the little gear icon) on the bottom right of the Badger GUI will bring up the Badger settings dialog, where you can configure Badger as needed:

![Configure Badger](/img/guides/settings.png)

As a side note, the routine name for the current run shown in the run monitor is displayed besides the *Settings* button.

### Export/import routines

Click the *Export*/*Import* button below the routine list will let you export the [**FILTERED** routines](#filter-routines) as a `.db` file or import the routines in a `.db` file.

![Export/import routines](/img/guides/export_import_routines.png)

## Routine monitor

### Control an optimization run

![Control a run](/img/guides/control.png)

### Reset the environment

You can reset the environment to initial states after a run by clicking the *Reset* button. Note that you can only reset the environment that you just run, and you cannot reset the environment in the middle of a run. To achieve the latter, [terminate the run](#control-an-optimization-run) first and then reset.

![Reset the env](/img/guides/control.png)

### Inspect the solutions in a run

![Inspect solutions](/img/guides/inspect_sol.png)

### Jump to the optimal solution

### Dial in the selected solution

### Change the horizontal axis

You can show the run on iteration-based x-axis or time-based x-axis. Simply select the desired x-axis type in the dropdown menu of the *X Axis Plot Type* selector will do. You can switch the x-axis types anytime, in the middle of a run of not.

### Normalize the variables for better visualization

You can show the run on iteration-based x-axis or time-based x-axis. Simply select the desired x-axis type in the dropdown menu of the *X Axis Plot Type* selector will do. You can switch the x-axis types anytime, in the middle of a run of not.

### Delete a run

### Send record to logbook

### Use data analysis/visualization extensions

## Routine editor

### Set the metadata

### Select and configure the generator

### Select and configure the environment

### Configure the VOCS
