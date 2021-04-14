using System;
using System.ComponentModel;
using System.Linq;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;

using Rock;
using Rock.Attribute;
using Rock.CheckIn;
using Rock.Model;

namespace RockWeb.Themes.NorthviewChurch.Layouts
{
    partial class CustomThemePage : Rock.Web.UI.RockPage
    {
        protected override void OnInit(EventArgs e)
        {
            base.OnInit(e);
            
            var bodyTag = this.Page.Master.FindControl( "bodyTag" ) as HtmlGenericControl;
            if ( bodyTag != null )
            {
                bodyTag.AddCssClass( "no-header" );
            }
        }
    }
}