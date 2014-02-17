;(function($){   
/**  
 * jqGrid Chinese Translation  
 * Lun Jun v5.rikugun@gmail.com  
 * http://rikugun.javaeye.com/blog/   
 * Dual licensed under the MIT and GPL licenses:  
 * http://www.opensource.org/licenses/mit-license.php  
 * http://www.gnu.org/licenses/gpl.html  
**/  
$.jgrid = {};   
  
$.jgrid.defaults = {   
    recordtext: "��",   
    loadtext: "��ȡ��...",   
    pgtext : "/"  
};   
$.jgrid.search = {   
    caption: "������...",   
    Find: "����",   
    Reset: "����",   
    odata : ['����', '������', 'С��', 'С�ڵ���','����','���ڵ���', '��ʼ��','������','����' ]   
};   
$.jgrid.edit = {   
    addCaption: "��Ӽ�¼",   
    editCaption: "�༭��¼",   
    bSubmit: "�ύ",   
    bCancel: "ȡ��",   
    bClose: "�ر�",   
    processData: "������...",   
    msg: {   
        required:"���ֶα���",   
        number:"��������Ч����",   
        minValue:"����ֵ������ڵ���",   
        maxValue:"����ֵ����С�ڵ���",   
        email: "�ⲻ����Ч��e-mail",
        integer: "��������Ч������ֵ",
		date: "��������Ч������ֵ"  
    }   
};   
$.jgrid.del = {   
    caption: "ɾ��",   
    msg: "ɾ����ѡ��¼?",   
    bSubmit: "ɾ��",   
    bCancel: "ȡ��",   
    processData: "������..."  
};   
$.jgrid.nav = {   
    edittext: " ",   
    edittitle: "�༭��ѡ��",   
    addtext:" ",   
    addtitle: "�����",   
    deltext: " ",   
    deltitle: "ɾ����ѡ��",   
    searchtext: " ",   
    searchtitle: "����",   
    refreshtext: "",   
    refreshtitle: "ˢ�±��",   
    alertcap: "����",   
    alerttext: "��ѡ����"  
};   
// setcolumns module   
$.jgrid.col ={   
    caption: "��ʾ/������",   
    bSubmit: "�ύ",   
    bCancel: "ȡ��"      
};   
$.jgrid.errors = {   
    errcap : "����",   
    nourl : "û������url",   
    norecords: "û��Ҫ����ļ�¼",
    model : "������������ģʽ�����!"
};
$.jgrid.formatter = {
	integer : {thousandsSeparator: " ", defaulValue: 0},
	number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaulValue: 0},
	currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaulValue: 0},
	date : {
		dayNames:   [
			"��", "һ", "��", "��", "��", "��", "��",
			"������", "����һ", "���ڶ�", "������", "������", "������", "������"
		],
		monthNames: [
			"һ", "��", "��", "��", "��", "��", "��", "��", "��", "ʮ", "ʮһ", "ʮ��",
			"һ��", "����", "����", "����", "����", "����", "����", "����", "����", "ʮ��", "ʮһ��", "ʮ����"
		],
		AmPm : ["am","pm","AM","PM"],
		S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th'},
		srcformat: 'Y-m-d',
		newformat: 'd/m/Y',
		masks : {
            ISO8601Long:"Y-m-d H:i:s",
            ISO8601Short:"Y-m-d",
            ShortDate: "n/j/Y",
            LongDate: "l, F d, Y",
            FullDateTime: "l, F d, Y g:i:s A",
            MonthDay: "F d",
            ShortTime: "g:i A",
            LongTime: "g:i:s A",
            SortableDateTime: "Y-m-d\\TH:i:s",
            UniversalSortableDateTime: "Y-m-d H:i:sO",
            YearMonth: "F, Y"
        },
        reformatAfterEdit : false
	},
	baseLinkUrl: '',
	showAction: 'show',
	addParam : ''
};
})(jQuery); 