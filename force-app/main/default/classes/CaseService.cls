public with sharing class CaseService {

    public static void closeCases(Set<Id> caseIds, String close_reason) {
        
        if ( null == caseIds || 0 == caseIds.size()) {
            throw new CaseServiceException('Provide Case Ids');
        }
        
        if ( String.isBlank(close_reason) ) {
            throw new CaseServiceException('Please Provide a reason');
        }
        
        List<Case> cases = [SELECT Id, Status, Reason FROM Case Where Id IN : caseIds];
        List<Case> closed_cases = new List<Case>();

        SavePoint sp = Database.setSavepoint();

        for(Case each_case : cases) {
            each_case.Status = 'Closed';
            each_case.Reason = close_reason;
            closed_cases.add(each_case);
        }
        
        if (closed_cases.size() > 0) {
            try {
                Database.update(closed_cases, true);
            } catch (Exception Ex) {
                Database.rollback(sp);
            }
        }
    }
    
    public class CaseServiceException extends Exception {}
}