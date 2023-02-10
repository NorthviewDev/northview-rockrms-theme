<%@ Page Language="C#" MasterPageFile="Site.Master" AutoEventWireup="true" Inherits="Rock.Web.UI.RockPage" %>

<asp:Content ID="ctFeature" ContentPlaceHolderID="feature" runat="server">

  <Rock:Zone Name="Feature" runat="server" />

</asp:Content>

<asp:Content ID="ctMain" ContentPlaceHolderID="main" runat="server">

	<main id="site-content">

        <!-- Start Content Area -->

        <!-- Ajax Error -->
        <div class="alert alert-danger ajax-error no-index" style="display:none">
          <div class="row">
            <div class="col-md-12">
              <p><strong>Error</strong></p>
              <span class="ajax-error-message"></span>
            </div>
          </div>
        </div>

        <Rock:Zone Name="Filters" runat="server" />
        <Rock:Zone Name="Feature Item" runat="server" />

        <Rock:Zone Name="Section A" runat="server" />
        <Rock:Zone Name="Section B" runat="server" />
        <section class="c-section c-section--dark">
        <div class="container">
          <div class="row">
            <h3 class="c-section__header">Most Recent</h3>
            <div class="latest-resources">
              <div class="resource-item Resource-1">
                  <Rock:Zone Name="Resource 1" runat="server" />
              </div>
              <div class="resource-item Resource-2">
                  <Rock:Zone Name="Resource 2" runat="server" />
              </div>
              <div class="resource-item Resource-3">
                  <Rock:Zone Name="Resource 3" runat="server" />
              </div>
              <div class="resource-item Resource-4">
                  <Rock:Zone Name="Resource 4" runat="server" />
              </div>
              <div class="resource-item Resource-5">
                  <Rock:Zone Name="Resource 5" runat="server" />
              </div>
              <div class="resource-item Resource-6">
                  <Rock:Zone Name="Resource 6" runat="server" />
              </div>
              <div class="resource-item Resource-7">
                  <Rock:Zone Name="Resource 7" runat="server" />
              </div>
              <div class="resource-item Resource-8">
                  <Rock:Zone Name="Resource 8" runat="server" />
              </div>
            </div>
            <div class="resource-footer Resource-Footer">
                <Rock:Zone Name="Resource Footer" runat="server" />
            </div>
          </div>
          </div>
        </section>
        <Rock:Zone Name="Section C" runat="server" />
        <Rock:Zone Name="Section D" runat="server" />

        <!-- End Content Area -->

	</main>

</asp:Content>