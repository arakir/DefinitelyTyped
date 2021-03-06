/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('surveys', 'v2', () => {
        /** now we can use gapi.client.surveys */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your surveys and results */
            'https://www.googleapis.com/auth/surveys',
            /** View your surveys and survey results */
            'https://www.googleapis.com/auth/surveys.readonly',
            /** View your email address */
            'https://www.googleapis.com/auth/userinfo.email',
        ];
        const immediate = true;
        gapi.auth.authorize({ client_id, scope, immediate }, authResult => {
            if (authResult && !authResult.error) {
                /** handle succesfull authorization */
                run();
            } else {
                /** handle authorization error */
            }
        });
        run();
    });

    async function run() {
        /** Retrieves a MobileAppPanel that is available to the authenticated user. */
        await gapi.client.mobileapppanels.get({
            panelId: "panelId",
        });
        /** Lists the MobileAppPanels available to the authenticated user. */
        await gapi.client.mobileapppanels.list({
            maxResults: 1,
            startIndex: 2,
            token: "token",
        });
        /** Updates a MobileAppPanel. Currently the only property that can be updated is the owners property. */
        await gapi.client.mobileapppanels.update({
            panelId: "panelId",
        });
        /**
         * Retrieves any survey results that have been produced so far. Results are formatted as an Excel file. You must add "?alt=media" to the URL as an
         * argument to get results.
         */
        await gapi.client.results.get({
            surveyUrlId: "surveyUrlId",
        });
        /** Removes a survey from view in all user GET requests. */
        await gapi.client.surveys.delete({
            surveyUrlId: "surveyUrlId",
        });
        /** Retrieves information about the specified survey. */
        await gapi.client.surveys.get({
            surveyUrlId: "surveyUrlId",
        });
        /** Creates a survey. */
        await gapi.client.surveys.insert({
        });
        /** Lists the surveys owned by the authenticated user. */
        await gapi.client.surveys.list({
            maxResults: 1,
            startIndex: 2,
            token: "token",
        });
        /** Begins running a survey. */
        await gapi.client.surveys.start({
            resourceId: "resourceId",
        });
        /** Stops a running survey. */
        await gapi.client.surveys.stop({
            resourceId: "resourceId",
        });
        /** Updates a survey. Currently the only property that can be updated is the owners property. */
        await gapi.client.surveys.update({
            surveyUrlId: "surveyUrlId",
        });
    }
});
